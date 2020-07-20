import React, { useState } from 'react';
import Item from '../Item';
import IItem from '../../interfaces/IItem';
import { Container, ButtonBox } from './styles';

import Accordion from '@material-ui/core/Accordion';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import api from '../../services/api';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }),
);

interface Props {
    item: IItem
}
const AccordionItem: React.FC<Props> = ( { item  }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const [visibility, setVisibility] = useState(true);

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const discart = async () =>{
      await api.delete(`/player/inventory/${item.id}`);
      setVisibility(false);
    }

    return (
      <>
      { visibility && <Container>
            <Accordion expanded={expanded === `panel${item.id}`} onChange={handleChange(`panel${item.id}`)}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${item.id}bh-content`} id={`panel${item.id}bh-header`} >
                    <Typography className={classes.heading}> { item.name } </Typography>
                    <Typography className={classes.secondaryHeading} > {`${item.type} - ${item.subtype}`} </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Item item={item} show={{ type:true, subtype:true, level:true, quality:true }} />
                        <ButtonBox>
                          <IconButton aria-label="delete" onClick={discart}>
                            <DeleteIcon color="secondary"/>
                          </IconButton>
                        </ButtonBox>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>}
      </>
    );
}

export default AccordionItem;