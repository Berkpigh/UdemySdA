import { Table } from "react-bootstrap";
import { Games } from "../../models";

export type TableGameProp = {
  items: Games;
};

export const TableGame = (props: TableGameProp) => {
  console.info(props);
    const listRows = props.items.map(game => <tr key={game.id}><td>{game.persoChoisi.surname}</td><td>{game.success.toString()}</td></tr>)

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
