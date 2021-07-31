import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';
import { Table } from "antd";
import Donates from './donates';

const DIV = styled.div`
    width: 100vh;
    overflow-y: auto;
    height: 100vh;
    background-color: rgba(255,255,255,0.5);
    position: center;
`

const TableWrapper = styled.div<{ visible: boolean }>`
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    transition: 0.2s;
`

function Donate() {
    const [list, setList] = useState(false);

    const setListVisible = () => {
        setList(!list);
    }

    return (
        <motion.div
            animate={{
                x: 0,
                opacity: 1
            }}
            initial={{
                opacity: 0
            }}
            exit={{
                opacity: 0
            }}
            transition={{
                duration: 0.2
            }}

            style={{
                textAlign: 'center',
            }}
        >
            <DIV>
                <h1>寄付</h1><br />
                <li style={{
                    listStyle: 'none',
                }}>
                    Muscari Serverは月額のレンタルサーバーではなく初期費用が必要な自宅サーバーを利用しています。<br />
                    しかし電気代やパーツ交換など多少の費用がかかるため寄付を募集しています。
                </li>
                <ul>
                    <h3>寄付によってできること</h3>
                    <li>サーバーの長期運営(モチベ維持・向上)</li>
                    <li>サーバーの強化(タイムアウト発生の防止、ラグ軽減)</li>
                </ul>
                <ul>
                    <h3>寄付の特典</h3>
                    <li>Discordの役職[VIP]の付与</li>
                    <li>Blogカテゴリに寄付者チャンネルの追加</li>
                    <li>ゲーム内で装着可能なバッジ</li>
                    <li>??????????</li>
                </ul>
                <ul>
                    <h2>寄付の方法</h2>
                    <li>オーナー(大佐(rkcyk706))にDiscordのDMでAmazonギフト券のコードを伝える。<br />※個人宛かサーバー宛か伝えて下さい。</li>
                    <li>大佐のAmazon欲しい物リストを買う。</li>
                    <li>寄付内容については全内容をWikiにて公開します。</li>
                </ul>
                <br />
                <a href="https://www.amazon.co.jp/registry/wishlist/2K8VZWQTFZSYU/ref=cm_sw_r_cp_ep_ws_rZzrCbT42HZXH" style={{
                    color: 'cyan',
                    fontSize: '1.5em',

                }}>大佐の欲しい物リスト</a>
                <div onClick={setListVisible} style={{
                    fontSize: '1.5em',
                    cursor: 'pointer',
                }}>寄付者のリスト(クリックで表示)</div>
                <TableWrapper visible={list} align="center">
                    <Donates/>
                </TableWrapper>
                <br />
            </DIV>
        </motion.div>
    )
}

export default Donate;