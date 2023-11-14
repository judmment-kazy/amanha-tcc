import Container from "@/components/Container";
import FormWrap from "@/components/inputs/FormWrap";
import RegisterForm from "./RegisterForm";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getCurrentUser } from "../../../../actions/getCurrentUser";

const Register = async() => {

    const currentUser = await getCurrentUser();

    return ( 
    <>
    <Header />
    <Container>
        <FormWrap>
            {/*@ts-ignore*/}
            <RegisterForm currentUser={currentUser} />
        </FormWrap>
    </Container>
    <Footer />
    </>
    );
}
 
export default Register;