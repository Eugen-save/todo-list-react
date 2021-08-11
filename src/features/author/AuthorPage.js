import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Eugeniusz Savelyev"
            body={
                <>
                    <p>Nazywam sie Eugeniusz. Pochodzę z Białorusi, ale już kilka lat mieszkam w Polsce, obecnie w
                        Warszawie. Fotografia jest moją pasją już 10 lat. Zmieniłem róźne styli fotografowania, również jak
                        próbowałem sobie prawie we wszystkich dziedzinach, takich jak <i>Food</i>, <i>Interior</i> i <i>Sport
                            Photography</i>.
                    </p>
                    <p>
                        Najbardziej pasjunującą dziedziną dla mnie jest <i>Street Fashion</i>, tym samym łącząc moją pasję do
                        wielkich miast i modnie ubranych ludzi. Jeśli jesteś zainteresowany, możesz <a class="main__outerLink"
                            rel="noreferrer noopener" target="_blank" href="https://instagram.com/eugen.save"
                            title="Moje portfolio na instagramie">zobaczyć
                            zdjęcia które robię w profilu na Instagramie</a>
                    </p>
                    </>}
        />
    </Container>
)