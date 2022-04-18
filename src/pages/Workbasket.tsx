// @flow 
import * as React from 'react';
import WorkBasketTabs from './../Components/WorkBasket/WorkBasketTabs';
import WorkbasketHeader from './../Components/WorkBasket/WorkbasketHeader';
type Props = {
    
}; 
const Workbasket = (props: Props) => {
    return (
        <>
         <WorkbasketHeader />
            <WorkBasketTabs />
        </>
    );
};
export default Workbasket;