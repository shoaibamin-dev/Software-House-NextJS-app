import React from 'react';
import { Card, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap';
import styles from '../../styles/service/Categories.module.css'


const Categories = (props) => {
    return (
        <div className={styles.parent}>
            <Card className={styles.card} body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle tag="h4">Mobile Application Development</CardTitle>
                <CardText >
                    <ul className={styles.ul}>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                    </ul>
                </CardText>

            </Card>
            <Card className={styles.card} body inverse style={{ backgroundColor: 'darkslategray', borderColor: 'darkslategray' }}>
                <CardTitle tag="h4">Desktop Application Development</CardTitle>
                <CardText >
                    <ul className={styles.ul}>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                    </ul>
                </CardText>

            </Card>
            <Card className={styles.card} body inverse style={{ backgroundColor: 'darkblue', borderColor: 'darkblue' }}>
                <CardTitle tag="h4">Content Management Systems</CardTitle>
                <CardText >
                    <ul className={styles.ul}>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                    </ul>
                </CardText>

            </Card>
            <Card className={styles.card} body inverse style={{ backgroundColor: 'darkcyan', borderColor: 'darkcyan' }}>
                <CardTitle tag="h4">Graphic Designing</CardTitle>
                <CardText >
                    <ul className={styles.ul}>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                    </ul>
                </CardText>

            </Card>
            <Card className={styles.card} body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle tag="h4">Web Designing and Development</CardTitle>
                <CardText >
                    <ul className={styles.ul}>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                    </ul>
                </CardText>

            </Card>
            <Card className={styles.card} body inverse style={{ backgroundColor: 'darkslategray', borderColor: 'darkslategray' }}>
                <CardTitle tag="h4">Digital Marketing</CardTitle>
                <CardText >
                    <ul className={styles.ul}>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                    </ul>
                </CardText>

            </Card>
            <Card className={styles.card} body inverse style={{ backgroundColor: 'darkblue', borderColor: 'darkblue' }}>
                <CardTitle tag="h4">Search Engine Optimization</CardTitle>
                <CardText >
                    <ul className={styles.ul}>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                    </ul>
                </CardText>

            </Card>
            <Card className={styles.card} body inverse style={{ backgroundColor: 'darkcyan', borderColor: 'darkcyan' }}>
                <CardTitle tag="h4">Middleware and ETL</CardTitle>
                <CardText >
                    <ul className={styles.ul}>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                        <li>
                            <i>Lorem Ipsum</i>
                        </li>
                    </ul>
                </CardText>

            </Card>


        </div>
    );
};

export default Categories;