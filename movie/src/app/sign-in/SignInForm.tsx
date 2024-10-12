'use client';

import { useState } from "react";
import { signIn } from "./signIn.action";

export function SignInForm() {
    const [email,setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    return (
        <form className="mt-4 flex flex-col gap-2" onSubmit={async (event) => {
            event.preventDefault();
            if(!email) {
                alert('이메일은 필수 입력 사항입니다.');
                return;
            }
            if(!password) {
                alert('비밀번호는 필수 입력 사항입니다.');
                return;
            }
            const response = await signIn( email, password );
            if(response.success) {
                alert('로그인 되었습니다.');
                // router.push( '/' );
            }
            else {
                alert( response.message || '서버와 통신에 실패했습니다.' );
            }
        }}>
            <div>
                <input type="email" className="border w-full p-2" placeholder="이메일" required
                    value={email} onChange={event=>setEmail(event.target.value)} />
            </div>
            <div>
                <input type="password" className="border w-full p-2" placeholder="비밀번호" required
                    value={password} onChange={event=>setPassword(event.target.value)}
                />
            </div>
            <button className="p-2 border w-full" type="submit">로그인</button>
        </form>
    )
}