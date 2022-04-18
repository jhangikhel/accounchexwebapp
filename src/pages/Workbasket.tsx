// @flow 
import * as React from 'react';
import WorkBasketTabs from './../Components/WorkBasket/WorkBasketTabs';
import WorkbasketHeader from './../Components/WorkBasket/WorkbasketHeader';
import WorkBasketContainer from './../Components/WorkBasket/WorkBasketContainer';
type Props = {
    
}; 
const Workbasket = (props: Props) => {
    return (
        <>
         
         <WorkbasketHeader />
            <WorkBasketTabs />
            <WorkBasketContainer />
        </>
    );
};
export default Workbasket;