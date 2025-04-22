import ThemeContext from "../contexts/ThemeContext.jsx";
import UserContext from "../contexts/UserContext.jsx";
import {useContext} from "react";
import ProfilePage from "./ProfilePage.jsx";

function Content() {

    // useContext 를 사용하여 Context 객체에 저장된 내용 가져옴
    const theme = useContext(ThemeContext);
    const user = useContext(UserContext);

    return (
        <div>
            {/* 부모가 props로 전달한 데이터 없음 */}
            {/* 자식 컴포넌트 호출 시 props로 데이터 전달 */}
            <ProfilePage theme={theme} user={user} />
        </div>
    );
}

export default Content