interface Props {
    data: IStateElement[],
    state: number,}

interface IStateElement {
    onClick: any,
    title: string
}

export function Status_bar(props: Props){
    const { data, state } = props
    return(
        <nav  className="breadcrumbs">
            {data.map((element, index) => {
                return(
                    <a  key={index} 
                        className={`breadcrumbs__item ${(state > index)? "is-active" : ""}`}
                        onClick={element.onClick}>
                            {element.title}
                    </a>
                );
            })}
        </nav>
    )
}