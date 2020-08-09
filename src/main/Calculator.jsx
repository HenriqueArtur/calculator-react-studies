import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

export default class Calculator extends Component {
    constructor(props) {
        super(props)
        this.clearMemory  = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit     = this.addDigit.bind(this)
    }
    
    clearMemory() {
        console.log('clear')
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit(n) {
        console.log(n)
    }
    
    render() {
        return (
            <div className="calculator">
                <Display value={100} />
                <Button lable='AC' click={this.clearMemory} triple />
                <Button lable='/' click={this.setOperation} operation />
                <Button lable='7' click={this.addDigit} />
                <Button lable='8' click={this.addDigit} />
                <Button lable='9' click={this.addDigit} />
                <Button lable='*' click={this.setOperation} operation />
                <Button lable='4' click={this.addDigit} />
                <Button lable='5' click={this.addDigit} />
                <Button lable='6' click={this.addDigit} />
                <Button lable='-' click={this.setOperation} operation />
                <Button lable='1' click={this.addDigit} />
                <Button lable='2' click={this.addDigit} />
                <Button lable='3' click={this.addDigit} />
                <Button lable='+' click={this.setOperation} operation />
                <Button lable='0' click={this.addDigit} double />
                <Button lable='.' click={this.addDigit} />
                <Button lable='=' click={this.setOperation} operation />
            </div>
        )
    }
}