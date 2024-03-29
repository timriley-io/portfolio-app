import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startRemoveProject } from '../actions/projects';
import { withRouter } from 'react-router';
import ProgressiveImage from 'react-progressive-image';

const ProjectListItemAdmin = ({ dispatch, id, description, title, images, history }) => (
    <div className="project" onClick={()=>{history.push('/projects/'.concat(id))}}>
        <div className="close-button" onClick={(e)=>{
            e.stopPropagation();
            dispatch(startRemoveProject({id}));
        }}>X</div>
        <Link className="project__title" to={'/projects/'.concat(id)}><h3>{title}</h3></Link>
        <p>{description.substring(0,40)}</p>

        {console.log("PROJLISTITEM: ", {id,title,description,images})}

        <ProgressiveImage src={images[0]} placeholder="/images/loader.gif">
            {(src, loading) => (
                <img style={{ opacity: loading ? 0.2 : 1}} src={src} alt="an image" />
            )}
        </ProgressiveImage>
        <br/>
        <button className="edit-button" onClick={(e)=>{
            e.stopPropagation();
            history.push('/edit/'.concat(id));
        }}>Edit
        </button>
    </div>
);

export default withRouter(connect()(ProjectListItemAdmin));