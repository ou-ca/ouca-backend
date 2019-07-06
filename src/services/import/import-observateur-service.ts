import { DB_SAVE_MAPPING } from "../../sql/sql-queries-utils";
import { TABLE_OBSERVATEUR } from "../../utils/constants";
import { ImportEntiteAvecLibelleService } from "./import-entite-avec-libelle-service";

export class ImportObservateurService extends ImportEntiteAvecLibelleService {
  protected getTableName(): string {
    return TABLE_OBSERVATEUR;
  }
  protected getDbMapping(): { [column: string]: string } {
    return DB_SAVE_MAPPING.observateur;
  }
  protected getThisEntityName(): string {
    return "Cet observateur";
  }
}