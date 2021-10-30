import { Box } from "@mui/system";
import React from "react";

import historyJSON from '@data/history.json';

import './history.scss';
import HistoryCard from "@components/history/history-card";

import IHistory from "model/IHistory";

export default class History extends React.Component {    
    historyData = historyJSON
    histories: any
    historyBox: React.RefObject<HTMLDivElement>;
    constructor (props: any) {
        super(props);
        this.historyBox = React.createRef();
    }  
    renderHistories(data: Array<IHistory>) {
        data.reverse();

        return data.map((history: IHistory) => {
            return <HistoryCard history={history}></HistoryCard>
        });
    }
    render() {
        this.histories = this.renderHistories(this.historyData);
        return (
        <Box sx={{display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'scroll'}}>
            {this.histories}
        </Box>);
    }
}