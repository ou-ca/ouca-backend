import { TABLE_AGE, TABLE_CLASSE, TABLE_COMMUNE, TABLE_COMPORTEMENT, TABLE_DEPARTEMENT, TABLE_DONNEE, TABLE_ESPECE, TABLE_ESTIMATION_DISTANCE, TABLE_ESTIMATION_NOMBRE, TABLE_INVENTAIRE, TABLE_LIEUDIT, TABLE_METEO, TABLE_MILIEU, TABLE_OBSERVATEUR, TABLE_SEXE } from "../utils/constants";
import { query } from "./sql-queries-utils";

export const queriesToClearAllTables = async (): Promise<void> => {
  const tables = [TABLE_DONNEE,
    TABLE_INVENTAIRE,
    TABLE_OBSERVATEUR,
    TABLE_LIEUDIT,
    TABLE_COMMUNE,
    TABLE_DEPARTEMENT,
    TABLE_METEO,
    TABLE_ESPECE,
    TABLE_CLASSE,
    TABLE_AGE,
    TABLE_SEXE,
    TABLE_ESTIMATION_NOMBRE,
    TABLE_ESTIMATION_DISTANCE,
    TABLE_COMPORTEMENT,
    TABLE_MILIEU
  ];

  for (const tableName of tables) {
    await query<void>(`DELETE FROM ${tableName}`);
    await query<void>(`ALTER TABLE ${tableName} AUTO_INCREMENT = 1`);
  }
}