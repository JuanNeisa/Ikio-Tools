import { IEvento } from "../../core/models/database.model";
import { EventDashboard_Header } from "./event-dashboard.header";

interface Props {
    data: IEvento
}

export function EventDashboard(props: Props) {
    return(
        <div className="container">
            <EventDashboard_Header data={props.data}/>
        </div>
    )
}