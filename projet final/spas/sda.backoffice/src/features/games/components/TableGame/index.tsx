import { Table } from "react-bootstrap";
import { Games } from "../../models";
import { GameRow } from '../GameRow/index';

export type TableGameProp = {
  items: Games;
};

export const TableGame = (props: TableGameProp) => {
  console.info(props);
    const listRows = props.items.map(game => <GameRow key={game.id} id={game.id} characterName={game.persoChoisi.surname} success={game.success.toString()}></GameRow>)

  const composant = (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Gagnée ?</th>
          </tr>
        </thead>
        <tbody>
            { listRows }
        </tbody>
      </Table>
    </>
  );
  console.info("Table ?", composant);
  return composant;
};
