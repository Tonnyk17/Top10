import React from 'react'
import styled from 'styled-components'
import { tablet } from '../../constants/sizes'
import { Icon } from '../atoms/Icon'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { IconText } from '../atoms/Text/IconText'
import { Button } from '../atoms/Button'

export const TableInfo = () => {
    return(
        <>
            <TableContainer>
                <TableInfoStyles>
                    <thead>
                        <tr>
                            <TableInfoHeadItem>Poster</TableInfoHeadItem>
                            <TableInfoHeadItem>Title</TableInfoHeadItem>
                            <TableInfoHeadItem>Likes</TableInfoHeadItem>
                            <TableInfoHeadItem>Dislikes</TableInfoHeadItem>
                        </tr>
                    </thead>
                    <TableInfoBody>
                        <tr>
                            <TableInfoItem>
                                <TablePoster src='https://i1.wp.com/cinemedios.com/wp-content/uploads/2021/07/Arcane_Poster.png?resize=1024%2C1435&ssl=1'/>
                                <Button content={'See more'}/>
                            </TableInfoItem>
                            <TableInfoItem>Arcane</TableInfoItem>
                            <TableInfoItem>
                                <Icon icon={faHeart} isButton/>
                                <IconText content={100}/>
                            </TableInfoItem>
                            <TableInfoItem>
                                <Icon icon={faHeart} isButton/>
                                <IconText content={100}/>
                            </TableInfoItem>
                        </tr>
                    </TableInfoBody>
                </TableInfoStyles>
            </TableContainer>
        </>
    )
}

const TableContainer = styled.div`
    width: 100%;
    margin: 40px auto;
    @media screen and (min-width: ${tablet}){
        width: 90%;
    }
`

const TableInfoStyles = styled.table`
    width: 100%;
    border: 1px solid cyan;
    border-collapse: collapse;
    color: white;
`;

const TableInfoHeadItem = styled.th`
    border: 1px solid cyan;
    border-collapse: collapse;
    height: 30px;
    background: #261A2BB3;
    background: -webkit-linear-gradient(bottom, #261A2BB3, #4A3257);
    background: -moz-linear-gradient(bottom, #261A2BB3, #4A3257);
    background: linear-gradient(to top, #261A2BB3, #4A3257);
`
const TableInfoBody = styled.tbody`
    width: 100%;
`
const TableInfoItem = styled.td`
    width: 25%;
    height: 180px;
    text-align: center;
    vertical-align: center;
    & > *{
        text-align: center;
    }
    border: 1px solid cyan;
    border-collapse: collapse;
    background-color: #2F2137;  
`

const TablePoster = styled.img`
    width: 80px;
`
