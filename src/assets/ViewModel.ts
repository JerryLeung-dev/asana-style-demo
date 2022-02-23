export interface ViewModel {
  action: {
    Priority: {
      Value: number | undefined;
    },
    AssignedTo: {
      Value: string | undefined;
    },
    Status: {
      Value: string | undefined;
    },
    DateOpened: {
      Value: Date | null
    }
    DateDue: {
      Value: Date | null    }
    DateClosed: {
      Value: Date | null    }
  },
  priorities : SelectListItem[],
  users: SelectListItem[],
  status: SelectListItem[],
}

 export type SelectListItem = {
  Text: string, Value: number
 }

