import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Button } from "../atoms/Button";
import { IconText } from "../atoms/Text/IconText";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { setDislike, setLike } from "../../redux/topDuck";
import { Icon } from "../atoms/Icon";
import { useNavigate } from "react-router-dom";

export const TableInfoRow = ({item, category}) => {
    const history = useNavigate()
    const dispatch = useDispatch()
    const likesSelector = useSelector(state => state.categories.myLikes);
    const dislikeSelector = useSelector(state =>  state.categories.myDislikes);
    const [isLiked,setIsLiked] = useState(false)
    const [isDisliked, setIsDisliked] = useState(false);
    const [myLocalLikes, setMyLocalLikes] = useState();
    const [myLocalDislikes, setMyLocalDislikes] = useState()

    useEffect(() => {
        const myLikesFilter = likesSelector.find(data => data.name === item.name)
    
        if(myLikesFilter){
            if(myLikesFilter.isLike || item.isLike){
                setIsLiked(true)
                setIsDisliked(false)
                setMyLocalLikes(myLikesFilter)
                setMyLocalDislikes(myLikesFilter)
            }
        }
        
    },[item.isLike, item.name, likesSelector])

    useEffect(() => {
        const myDislikeFilter = dislikeSelector.find(data => data.name === item.name)
        
        if(myDislikeFilter){
            if(myDislikeFilter.isDislike || item.isDislike){
                setIsDisliked(true)
                setIsLiked(false)
                setMyLocalDislikes(myDislikeFilter)
                setMyLocalLikes(myDislikeFilter)
            }
        }
        
    },[dislikeSelector, item.isDislike, item.name])
    return(
        <>
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
                        color={isLiked && 'cyan'}
                    />
                <IconText content={myLocalLikes ? myLocalLikes.likes : item.likes}/>
                </TableInfoItem>
                <TableInfoItem>
                    <Icon 
                        icon={faThumbsDown} 
                        isButton
                        onClick={() => dispatch(setDislike(item))}
                        color={isDisliked && 'cyan'}
                    />
                <IconText content={myLocalDislikes ? myLocalDislikes.dislikes : item.dislikes}/>
                </TableInfoItem>
            </tr>
        </>
    )
}

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