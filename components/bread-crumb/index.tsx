import Link from "next/link";
import { IRoute } from "../../core/models/component.model";

interface Props {
    route: IRoute[],
    title: string
}

export function Bread_crumb(props: Props){ 
    return(
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {props.route.map((element, index) => {
                    return(
                        <Link key={index} href={element.url}>
                            <li className="breadcrumb-item">
                                <div>
                                    {element.icon && <i className={`me-1 ${element.icon}`}></i>}
                                    <a>Eventos</a>
                                </div>
                            </li>
                        </Link>
                    )
                })}
                <li className="breadcrumb-item active" aria-current="page">{props.title}</li>
            </ol>
        </nav>
    )
}