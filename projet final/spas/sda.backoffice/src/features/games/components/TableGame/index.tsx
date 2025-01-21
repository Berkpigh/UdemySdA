import { Table } from "react-bootstrap";

export type TableGameProp = {
  items: string[];
};

export const TableGame = (props: TableGameProp) => {
  console.info(props);
    const listRows = props.items.map(perso => <tr><td>{perso}</td><td>Success</td></tr>)

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
