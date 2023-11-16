import Container from "@/components/Container";
import FormWrap from "@/components/inputs/FormWrap";
import LoginForm from "./LoginForm";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getCurrentUser } from "../../../../actions/getCurrentUser";

const Login = async() => {

    const currentUser = await getCurrentUser();

    return ( 
        <>
        <div className="h-full w-full bg-brickwall bg-stylish py-[190px]">
        <Container>
            <FormWrap>
                {/*@ts-ignore*/}
                <LoginForm currentUser={currentUser} />
            </FormWrap>
        </Container>
        </div>
        </>
     );
}
 
export default Login;