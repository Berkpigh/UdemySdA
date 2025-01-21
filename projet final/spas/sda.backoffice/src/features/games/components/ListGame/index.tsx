import { Row, Col } from "react-bootstrap"
import { TableGame } from "../TableGame"

/**
 * Composant représeantant un tableau des games à gérer
 * @returns 
 */
export const ListGame = () => {
    console.info('Mon composant')
    const list: string[] = ['Aragorn', 'Legolas']
    
    const monComposant = (
        <>
        <Row>
            <Col md={2}>
                <TableGame items={list}></TableGame>
            </Col>
        </Row>
        </>
    )
    console.info(monComposant)
    return monComposant
}