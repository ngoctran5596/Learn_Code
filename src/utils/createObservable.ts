import { Observable } from 'rxjs'

export const createObservableFromFirebase = (promise:any, doneValue:any) =>
  Observable.create((observer:any) => {
    promise
      .then(() => {
        observer.next(doneValue ? doneValue : 'done')

        observer.complete()
      })
      .catch((err:any) => {
        observer.error(err.message)
      })
  })
