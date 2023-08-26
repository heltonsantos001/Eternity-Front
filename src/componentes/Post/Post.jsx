import {Main} from "./postStyled"
import {Card} from"../Card/Card"

export const PostProfile = (props) => {

 
  return (
    <>
      <Main>
        <Card
          key={props.id}
          founder={props.founder}
          verified={props.verified}
          id={props.id}
          three={props.three}
          deletePost={props.deletePost}
          data={props.data}
          foto={props.foto}
          title={props.title}
          likes={props.likes}
          comments={props.comments}
          name={props.name}
          fotoUser={props.fotoUser}
        />
      </Main>
    </>
  );
};
