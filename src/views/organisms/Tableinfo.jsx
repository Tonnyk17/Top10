import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { tablet } from '../../constants/sizes'
import { Icon } from '../atoms/Icon'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { IconText } from '../atoms/Text/IconText'
import { Button } from '../atoms/Button'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setDislike, setLike } from '../../redux/topDuck'

export const TableInfo = () => {
    const categorySelector = useSelector(state => state.categories.categories)
    const [categoryList, setCategoryList] = useState();
    const {category} = useParams();
    const history = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const categoryFilter = categorySelector.find(item => item.type === category);
        setCategoryList(categoryFilter)

    },[category, categorySelector])
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
                        {
                            categoryList && 
                            categoryList.items.map(item => (
                                <tr>
                                    <TableInfoItem>
                                        <TablePoster src={item.posterImage}/>
                                        <Button 
                                            content={'See more'}
                                            onClick={() => history(`/${category}/${item.name}`)}
                                        />
                                    </TableInfoItem>
                                    <TableInfoItem>{item.name}</TableInfoItem>
                                    <TableInfoItem>
                                        <Icon 
                                            icon={faThumbsUp} 
                                            isButton
                                            onClick={() => dispatch(setLike(item))}
                                            color={item.isLike && 'cyan'}
                                        />
                                        <IconText content={item.likes}/>
                                    </TableInfoItem>
                                    <TableInfoItem>
                                        <Icon 
                                            icon={faThumbsDown} 
                                            isButton
                                            onClick={() => dispatch(setDislike(item))}
                                            color={item.isDislike && 'cyan'}
                                        />
                                        <IconText content={item.dislikes}/>
                                    </TableInfoItem>
                                </tr>
                            ))
                        }
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
