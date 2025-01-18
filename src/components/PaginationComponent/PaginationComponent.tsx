import {useSearchParams} from "react-router-dom";

enum EDirection {
    next= "next",
    prev= "prev"
}

const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({pg: '0'})

    const paginator = (direction:EDirection) => {
        const pg = query.get('pg')
        if (pg) {
            if (direction === 'prev') {
                const currentPage = +pg - 30
                setQuery({pg: currentPage.toString()})
            } else if (direction === 'next') {
                const currentPage = +pg + 30
                setQuery({pg: currentPage.toString()})
            }
        }
    }

    return (
        <div>
            <button onClick={() => paginator(EDirection.prev)}>prev</button>
            <button onClick={() => paginator(EDirection.next)}>next</button>
        </div>
    );
};

export default PaginationComponent;