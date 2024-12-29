import { loading } from "./enums/reduxEnums"

export const mappingStatusToLoadingState = (status)=>{
    switch (status){
        case loading.SUCCEEDED:{
            return 'success'
        }
        case loading.PENDING:{
            return 'loading'
        }
        case loading.FAILED:{
            return 'error'
        }

    }
}