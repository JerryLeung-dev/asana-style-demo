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
    }
  },
  priorities : SelectItem[],
  users: SelectItem[],
  status: SelectItem[],
}

 export interface SelectItem {
  Text: string, Value: number
 }

