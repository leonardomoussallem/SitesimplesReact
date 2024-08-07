import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder
                    src='https://github.com/diego3g.png'/>
                    <div className={styles.authorInfo}>
                    <strong>Diego Costa</strong>
                    <span>Web Enginneer</span>
                    </div>
                </div>

                <time title="7 de agosto as 13:13"dateTime="2024-07-08 13:13:30">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fale galera</p>
                <p>Acabei de subir mais um projeto no meu portifolio. pipipopopo deem uma olhada aqui!</p>
                <p><a href="">link divertido</a>{' '}</p>
                <p>
                    <a href="">#uhul</a> {' '}
                    <a href="">#tavendomeuportifolioneseucorno</a>{' '}
                    <a href="">#deixaolike</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe Seu Feedback</strong>

                <textarea
                    placeholder='deixei um comentario'
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}