import { IEvento } from "../../../models/database.model"

export const addEvent = async (event: IEvento) => {
    await fetch('api/evento', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          event
      })
    })
}

export const deleteEvent = async (eventId: number) => {
    await fetch(`api/evento`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            eventId
        })
    })
}