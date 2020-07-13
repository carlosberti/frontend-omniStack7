import styled from 'styled-components';

export default {
    Container: styled.section`
        width: 100%;
        max-width: 580px;
        margin: 0 auto;
        padding: 0 30px;

        > article {
            background-color: #fff;
            border: 1px solid #ddd;
            margin-top: 30px;

            > img {
                width: 100%;
            }

            > header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 20px;
            }

            > footer {
                padding: 20px;

                > p {
                    font-size: 13px;
                    margin-top: 2px;
                    line-height: 18px;

                    > span {
                        color: #7159c1;
                        display: block;
                    }
                }
            }
        }
    `,
    UserInfo: styled.div`
        display: flex;
        flex-flow: column nowrap;

        > span {
            font-size: 13px;

            & + span {
                font-size: 11px;
                color: #666;
                margin-top: 3px;
            }
        }

    `,
    Actions: styled.div`
        margin-bottom: 10px;

        > button {
            background: transparent;
            border: 0;
        }

        img {
            height: 20px;
            margin-right: 10px;
        }
    `,
}