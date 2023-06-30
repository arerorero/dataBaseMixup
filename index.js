const db = require('./db');
const { promise } = require('selenium-webdriver');
const database = new db();
const connection = database.bringCon();
const pool = database.bringPool();
dataAtual = new Date();
dataAtual = dataAtual.toISOString().split('T')[0];

classes = [
  TabItemNFE = require('./tabs/TabItemNFE'),
  TabItemNFS = require('./tabs/TabItemNFS'),
  TabNotaFiscalEntrada = require('./tabs/TabNotaFiscalEntrada'),
  TabNotaFiscalSaida = require('./tabs/TabNotaFiscalSaida'),  
  ]
classesNoDta = [
  TabAlmoxarifado = require('./tabs/TabAlmoxarifado'),
  TabCidade = require('./tabs/TabCidade'),
  TabEmpresa = require('./tabs/TabEmpresa'),
  TabEstado = require('./tabs/TabEstado'),
  TabGrupoItem = require('./tabs/TabGrupoItem'),
  TabItem = require('./tabs/TabItem'),
  TabModeloDocumentoFiscal = require('./tabs/TabModeloDocumentoFiscal'),
  TabParcelaNFE = require('./tabs/TabParcelaNFE'),
  TabPessoa = require('./tabs/TabPessoa'),
  TabSubgrupoItem = require('./tabs/TabSubgrupoItem'),
  TabTipoCobranca = require('./tabs/TabTipoCobranca'),
  TabTipoReceita = require('./tabs/TabTipoReceita')
]

async function getRowCount(consulta1, date) {
  let ncountrow;
  return await (new Promise((resolve, reject) => {
    ncountrow = connection.query(consulta1, date, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]['count(1)']);
      }
    });
  }))
}
async function deleteData(classVar, x) {

  fillable = new classVar(); 
  notfillable = fillable.getNot(); 

  currentDate = new Date();
  otherDate = new Date();
  currentDate.setDate(currentDate.getDate() - x);
  otherDate.setDate(otherDate.getDate() - x - 7);
  currentDate = currentDate.toISOString().split('T')[0];
  otherDate = otherDate.toISOString().split('T')[0];
  date = [otherDate, currentDate];
  console.log(date)
  
  try {
    switch (notfillable) {
      case 'tab_nota_fiscal_saida':
        consulta2 = "SELECT count(1) FROM " + notfillable + " where left(dta_emissao,10) BETWEEN ? AND ?";
        ncountrow = await getRowCount(consulta2, date);
        exerc = await deleteOne(ncountrow, notfillable, date);
        break;
      case 'tab_nota_fiscal_entrada':
        consulta2 = 'SELECT count(1) FROM ' + notfillable + ' where left(dta_digitacao,10) BETWEEN ? AND ?';
        ncountrow = await getRowCount(consulta2, date);
        exerc = await deleteOne(ncountrow, notfillable, date);
        break;
      case 'tab_item_nfs':
        consulta2 = "SELECT count(1) FROM tab_item_nfs where dta_emissao BETWEEN ? AND ?";
        ncountrow = await getRowCount(consulta2, date);
        exerc = await deleteOne(ncountrow, notfillable, date);
        break;
      case 'tab_item_nfe':
        consulta2 = "SELECT count(1) FROM tab_item_nfe item inner join tab_nota_fiscal_entrada as cab on item.seq_nota = cab.seq_nota where date(cab.dta_digitacao) BETWEEN ? AND ?";
        ncountrow = await getRowCount(consulta2, date);
        exerc = await deleteOne(ncountrow, notfillable, date);
        break;
      default:
        consulta2 = 'DELETE FROM ' + notfillable;
        await (new Promise((resolve, reject) => {
          connection.query(consulta2, (error, results) => {
            if (error) {
              reject(error);
            } else {
              console.log("All deleted from "+notfillable)
              resolve(results);
            }
          });
        }))
        break;
    }
  } catch (error) {
    console.error('Erro ao deletar no MySQL:', error);
    process.exit()
  }
}
async function deleteOne(ncountrow, notfillable, data) {
  console.log(ncountrow + " rows deleted in " + notfillable)
  alfa = Math.floor(ncountrow / 500);
  return deleteOneHelper(notfillable, data, alfa, -1)
}
async function deleteOneHelper(notfillable, data, alfa, beta) {
  if (alfa != null) {
    for (; alfa > beta; beta += 500) {
      await deleteMin(notfillable, data)
    }
  }
}
async function deleteMin(notfillable, data) {
  switch (notfillable) {
    case 'tab_nota_fiscal_saida':
      consulta3 = 'DELETE FROM tab_nota_fiscal_saida WHERE LEFT(dta_emissao, 10) BETWEEN ? AND ?';
      await new Promise((resolve, reject) => {
        connection.query(consulta3, [data[0], data[1]], (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
      break;
    case 'tab_nota_fiscal_entrada':
      consulta3 = 'DELETE FROM tab_nota_fiscal_entrada WHERE LEFT(dta_digitacao, 10) BETWEEN ? AND ?';
      await new Promise((resolve, reject) => {
        connection.query(consulta3, [data[0], data[1]], (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
      break;
    case 'tab_item_nfs':
      consulta3 = "DELETE FROM tab_item_nfs where dta_emissao between ? and ?";
      await new Promise((resolve, reject) => {
        connection.query(consulta3, data, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
      break;
    case 'tab_item_nfe':
      consulta3 = "DELETE FROM tab_item_nfe where dta_digitacao between ? and ?";
      await new Promise((resolve, reject) => {
        connection.query(consulta3, data, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
      break;
  }
}
async function insertInto(classVar, x) {
  currentDate = new Date();
  otherDate = new Date();
  currentDate.setDate(currentDate.getDate() - x);
  otherDate.setDate(otherDate.getDate() - x - 7);
  currentDate = currentDate.toISOString().split('T')[0];
  otherDate = otherDate.toISOString().split('T')[0];


  classTable = new classVar()  
  orderby = classTable.getOrderby();
  notfillable = classTable.getNot(); 
  fillable = classTable.getFillable(); 
  fillableString = fillable.slice(0).join(","); 


  try {
    switch (notfillable) {
      case 'tab_nota_fiscal_saida':
        consulta4 = 'SELECT count(1) FROM ' + notfillable + ' where left(dta_emissao::text,10) BETWEEN $1 AND $2';
        ncountrow = await pool.query(consulta4, [otherDate, currentDate]);
        break;
      case 'tab_nota_fiscal_entrada':
        consulta4 = 'SELECT count(1) FROM ' + notfillable + ' where left(dta_digitacao::text,10) BETWEEN $1 AND $2';
        ncountrow = await pool.query(consulta4, [otherDate, currentDate]);
        break;
      case 'tab_item_nfs':
        consulta4 = 'SELECT count(1) FROM tab_item_nfs item inner join tab_nota_fiscal_saida cab on item.seq_nota = cab.seq_nota where left(cab.dta_emissao::text,10) BETWEEN $1 AND $2';
        ncountrow = await pool.query(consulta4, [otherDate, currentDate]);
        break;
      case 'tab_item_nfe':
        consulta4 = 'SELECT count(1) FROM tab_item_nfe item inner join tab_nota_fiscal_entrada cab on item.seq_nota = cab.seq_nota where left(cab.dta_digitacao::text,10) BETWEEN $1 AND $2';
        ncountrow = await pool.query(consulta4, [otherDate, currentDate]);
        break;
      default:
        consulta4 = 'SELECT count(1) FROM ' + notfillable;
        ncountrow = await pool.query(consulta4);
        break;
    }
    ncountrow = ncountrow.rows[0]['count'];
    console.log(ncountrow + " inserts in " + notfillable);
    for (offset = 0; offset < ncountrow; offset += 5000) {
      switch (notfillable) {
        case 'tab_nota_fiscal_saida':
          consulta5 = 'SELECT ' + fillableString + ' FROM ' + notfillable + ' where left(dta_emissao::text,10) BETWEEN $2 AND $3 order by seq_nota OFFSET $1 limit 5000';
          valores = [offset, otherDate, currentDate];
          break;
        case 'tab_nota_fiscal_entrada':
          consulta5 = 'SELECT ' + fillableString + ' FROM ' + notfillable + ' where left(dta_digitacao::text,10) BETWEEN $2 AND $3 order by seq_nota OFFSET $1 limit 5000';
          valores = [offset, otherDate, currentDate];
          break;
        case 'tab_item_nfs':
          consulta5 = 'SELECT ' + fillableString + ' FROM tab_item_nfs item INNER JOIN tab_nota_fiscal_saida cab ON item.seq_nota = cab.seq_nota WHERE LEFT(cab.dta_emissao::text,10) BETWEEN $2 AND $3 order by seq_nota OFFSET $1 LIMIT 5000';
          valores = [offset, otherDate, currentDate];
          break;
        case 'tab_item_nfe':
          consulta5 = 'SELECT ' + fillableString + ' FROM tab_item_nfe item INNER JOIN tab_nota_fiscal_entrada cab ON item.seq_nota = cab.seq_nota WHERE LEFT(cab.dta_digitacao::text,10) BETWEEN $2 AND $3 order by seq_nota OFFSET $1 LIMIT 5000';
          valores = [offset, otherDate, currentDate];
          break;
        default:
          consulta5 = 'SELECT ' + fillableString + ' FROM ' + notfillable + ' ORDER BY ' + orderby + ' OFFSET $1 LIMIT 5000';
          valores = [offset];
          break;
      }
   
      resultado = await (new Promise((resolve, reject) => {
        pool.query(consulta5, valores, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      }));
      for (row of resultado.rows) {
        exerc = await insertOne(row, notfillable);
      }
    }
  } catch (error) {
    console.error('Erro ao consultar no PostgreSQL:', error);
  }
}
async function insertOne(row, notfillable) {
  return await new Promise((resolve, reject) => {
    connection.query('INSERT INTO ' + notfillable + ' SET ?', row, (error, results) => {
      if (error) {
        reject(error);
        process.exit();
      } else {
        resolve(results);
      }
    });
  });
}
async function insertAll(todos, differenceInDays = 7, x = 0) {
  for (classVar of todos) {
    console.log("+============================+")
    for (let i = x; i < differenceInDays; i += 8) {
      console.log("+============================+")
      await deleteData(classVar, i)
      await insertInto(classVar, i)
    }
  }
}
async function dateNFS() {
  return new Promise((resolve, reject) => {
    pool.query('SELECT dta_emissao FROM tab_nota_fiscal_saida ORDER BY dta_emissao LIMIT 1', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}
async function main() {
  try {
    dta = await (dateNFS());
    let date = dta.rows[0].dta_emissao
    date = date.toISOString().split('T')[0];
    return date
  } catch (error) {
    console.error(error);
  }
}

main().then(async dta => {
  const dataComeco = new Date(dta);
  const dataAtual = new Date();
  const differenceInTime = dataAtual.getTime() - dataComeco.getTime();
  const differenceInDays = Math.ceil(differenceInTime/(1000*3600*24));

  console.log(differenceInDays / 7)
  i = 7;
  await insertAll(classesNoDta)
  await insertAll(classes, differenceInDays, i)
  process.exit();
});
