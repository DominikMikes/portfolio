import { Box } from "@mui/system";
import React from "react";

import historyJSON from '@data/history.json';

import './history.scss';
import HistoryCard from "@components/history/history-card";

import IHistory from "model/IHistory";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default class History extends React.Component {    
    historyData = historyJSON
    histories: any
    navigationDots: any
    innerContainer: React.RefObject<HTMLDivElement>;
    scrollWidth: number
    maxSteps: number
    currentStep: number
    constructor (props: any) {
        super(props);
        this.innerContainer = React.createRef();
        let initialScrollWidth = 400;
        this.scrollWidth = initialScrollWidth;
        this.maxSteps = this.historyData.length-1;
        this.currentStep = 0;
    }
    componentDidMount () {
        if (this.innerContainer.current) {
            let marginRight = parseInt(window.getComputedStyle(this.innerContainer.current.children[0]).marginRight);
            let offsetWidth = parseInt(window.getComputedStyle(this.innerContainer.current.children[0]).width); 
            this.scrollWidth = marginRight + offsetWidth;
        }
    }
    toggleActiveDot(idx: number) {
        document.getElementById(`historyDot${idx}`)?.classList.toggle('active');
    }
    scrollContainer (direction: string): void {
        let nextStep = this.currentStep;
        if (direction === 'back') {
            nextStep = (nextStep > 0) ? nextStep-1 : 0;
        } else {
            nextStep = (nextStep < this.maxSteps) ? nextStep+1 : this.maxSteps;
        }

        this.scrollToCard(nextStep);

        let node = this.innerContainer.current;
        if (node) {
            const nextTranslate = (this.currentStep * this.scrollWidth) * -1;
            node.style.transform = `translateX(${nextTranslate}px)`;
        }
    }
    scrollToCard(idx: number) {
        this.toggleActiveDot(this.currentStep);
        this.currentStep = idx;
        this.toggleActiveDot(idx);
        let node = this.innerContainer.current;
        if (node) {
            const nextTranslate = (this.currentStep * this.scrollWidth) * -1;
            node.style.transform = `translateX(${nextTranslate}px)`;
        }
    }
    renderNavigationDots() {
        return this.historyData.map((history: IHistory, idx: number) => {
            return <div
                    id={`historyDot${idx}`}
                    onClick={() => this.scrollToCard(idx)}
                    className={`slider-dot ${idx===0 ? "active" : ""}`}></div>;
        });
    }
    renderHistories() {
        this.historyData.reverse();

        return this.historyData.map((history: IHistory) => {
            return <HistoryCard history={history}></HistoryCard>
        });
    }
    render() {
        this.histories = this.renderHistories();
        this.navigationDots = this.renderNavigationDots();
        return (
            <div className="history-outer-container">
                <div className="arrow-container arrow-back" onClick={() => this.scrollContainer('back')}>
                    <ArrowBackIosIcon fontSize="small"></ArrowBackIosIcon>
                </div>
                <Box className="history-inner-container" ref={this.innerContainer}>
                    {this.histories}
                </Box>
                <div className="arrow-container arrow-forward" onClick={() => this.scrollContainer('forward')}>
                    <ArrowForwardIosIcon fontSize="small"></ArrowForwardIosIcon>
                </div>
                <div className="slider-navigation">
                    {this.navigationDots}                    
                </div>
            </div>
        );
    }
}