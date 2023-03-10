import {SeccionesMain} from './SeccionesMain'
import { CertificadoMain } from './CertificadoMain'
import {HabilidadesMain} from './HabilidadesMain'



export function MainPrincipal () {
    return (
        <main>
            <SeccionesMain titulo="Sobre Mi" descripcion="
                Me llamo Matias Latorre, soy Front-End Developer.
                Comencé a estudiar este ámbito porque siempre me llamó la atención las páginas web, luego de estudiar y practicar lo suficiente me di cuenta que me terminó gustando, por lo que se me ocurrió la idea de monetizar mis desarrollos para poder trabajar de lo que más me gusta. Siempre me mantengo estudiando y aprendiendo constantemente para estar lo más actualizado posible a las tendencias nuevas, como diseños minimalistas, diseños coloridos, etc. En un futuro me gustaría adquirir la experiencia suficiente para llegar a ser Full Stack Developer." id="SobreMi"/>
            <SeccionesMain titulo="Trabajo" descripcion="
                Actualmente me encuentro abierto a cualquier oferta laboral, puedes contactarme por algunas de mis redes sociales para contarme tu proyecto, acordar un precio y empezar el proyecto ahora."  />
            <SeccionesMain titulo ="Certificados" descripcion="
                Esta sección es para mostrar los certificados que obtuve hasta el momento de hoy, para poder demostrar mis conocimientos." id="Descripcion_Certificado">
                    <div className="certificados__container">
                        <CertificadoMain img="AP1" empresa="Aprende Programando, Ministro de Educacion de Argentina" nivel="Desarrollo Web 1" tecnologia1="HTML" tecnologia2="CSS">
                        </CertificadoMain>

                        <CertificadoMain img="AP2" nivel="Desarrollo Web 2" empresa="Aprende Programando, Ministro de Educacion de Argentina"  tecnologia3="JavaScript">
                        </CertificadoMain>

                        <CertificadoMain img="Google1" nivel="Desarrollo web 1" empresa="Google"  codigo="NGD UT5 ZN7"
                        tecnologia1="HTML"/>

                        <CertificadoMain img="Google2" nivel="Desarrollo web 2" empresa="Google" codigo="RFS VBG EPV"
                        tecnologia1="HTML" tecnologia2="CSS" />

                        <CertificadoMain img="CertificadoUXUI" nivel="Diseño UX/UI" empresa="Aprende Programando, Ministro de Educacion de Argentina"/>

                    </div> 
            </SeccionesMain>

            <SeccionesMain  titulo="Habilidades" descripcion="Estas son las habilidades o lenguajes que utilizo para trabajar por el momento."><br /><br /> <hr />
                <HabilidadesMain />
            </SeccionesMain>
        </main>
    )
}
