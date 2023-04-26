import { Button, Grid, Header, Image } from "semantic-ui-react";
import Container from "../Container";
import MarvelImage from "../../img/marvel.png";
import "./BestCharacters.scss";
export default function BestCharacters() {
    return (
        <Container>
            <div className="best-characters">
                <Grid columns={2} divided="vetically">
                    <Grid.Column>
                        <Header as="h1">
                            Los mejores personajes de marvel de todo el mundo
                        </Header>
                        <Button>Ver todos los personajes</Button>
                    </Grid.Column>
                    <Grid.Column className="image-container">
                        <Image src={MarvelImage} alt="MArvel APP" />

                    </Grid.Column>
                </Grid>
            </div>
        </Container>

    )
}