import { Pin } from '@/components/PostMainPage/PostMainPage';
import * as React from 'react';

type useInfiniteScrollProps = {
    pageNumber:number;
    items:Pin[];
};

const useInfiniteScroll:React.FC<useInfiniteScrollProps> = ({pageNumber,items}) => {
    
    return (
        <div>

        </div>
    )
}
export default useInfiniteScroll;