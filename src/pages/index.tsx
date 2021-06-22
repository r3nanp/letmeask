import Image from 'next/image'
import { SEO } from '@components/SEO'
import { Button } from '@components/Button'

import * as S from '@styles/app'
import logoImg from '../../public/images/logo.svg'
import illustrationImg from '../../public/images/illustration.svg'
import googleIconImg from '../../public/images/google-icon.svg'

export default function Home() {
  return (
    <S.Container>
      <SEO title="LetMeAsk | Home" />
      <S.Aside>
        <Image
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
          width={500}
          height={500}
        />
        <strong>Crie salas de Q&amp;A ao vivo.</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real.</p>
      </S.Aside>
      <S.MainContent>
        <S.Content>
          <Image src={logoImg} alt="LetMeAsk" width={500} height={500} />
          <button className="create-room">
            <div className="logo-google">
              <Image
                src={googleIconImg}
                alt="Logo do Google"
                width={500}
                height={500}
              />
            </div>
            Crie suas salas com o Google
          </button>
          <div className="separator">ou entre na sala</div>
          <form action="">
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </S.Content>
      </S.MainContent>
    </S.Container>
  )
}
