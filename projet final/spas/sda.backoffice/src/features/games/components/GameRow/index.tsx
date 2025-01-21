export type RowGameProp = {
  id: number,
  characterName: string,
  success: string
};

/**
 * One row inside a table of rows
 */
export const GameRow = (props: RowGameProp) => {
  return (
    <>
      <tr key={props.id}>
        <td>{props.characterName.toString()}</td>
        <td>{props.success}</td>
      </tr>
    </>
  );
};
