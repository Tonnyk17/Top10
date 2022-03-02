import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { tablet } from '../../constants/sizes'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { TableInfoRow } from '../molecules/TableInfoRow'

export const TableInfo = () => {
    const categorySelector = useSelector(state => state.categories.categories)
    const [categoryList, setCategoryList] = useState();
    const {category} = useParams();

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
                            categoryList.items.map((item,i) => (
                                <TableInfoRow 
                                    item={item} 
                                    category={category}
                                    key={i}
                                />
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
   


