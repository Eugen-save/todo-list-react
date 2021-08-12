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
                        Warszawie. Główną moją pasją jest fotografia, zajmuję ją już 10 lat. Jeśli jesteś zainteresowany, możesz <a class="main__outerLink"
                            rel="noreferrer noopener" target="_blank" href="https://instagram.com/eugen.save"
                            title="Moje portfolio na instagramie">zobaczyć
                            zdjęcia które robię w profilu na Instagramie</a>
                    </p>
                    <p>
                        Poza fotografią pracuję w korporacji w zespole zakupów przy departamencie IT. 
                        Zajmuję się kupnem sprzętu komputerowego, serwerów i licencji na potrzeby firmy.
                        Można powiedzieć że technologię są moją drugą pasją, lubię śledzić nowości technologiczne i to jak rozwija się świat. 🛰
                        W sumie to wszystko stało powodem że zacząłem naukę programowania, bo chcę stać częścią światu IT i móc tworzyć coś fajnego 😎
                    </p>
                    <p>
                        Wolny czas spędzam z swoją córką i żoną, uważam że rodzina jest najważnejszym spędzeniem czasu w życiu człowieka 🥰 
                    </p>
                    </>}
        />
    </Container>
)