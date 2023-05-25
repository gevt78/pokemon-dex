import React, { memo } from "react";

import makeStyles from '@mui/styles/makeStyles'
import { useTheme } from '@mui/material/styles'
import { Box, LinearProgress, Stack } from "@mui/material";

import styles from './styles'

const useStyles = makeStyles(styles)
const colorBar = ['ice', 'dark', 'dragon', 'rock', 'steel', 'physical']

const InfoTab = ({ data, displayProgressBar = false }) => {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <>
      {data.map((item, index) => (
        <div
          key={item.label}
          className={classes.container}
        >
          <div className={classes.labelContainer}>
            {item.label}
          </div>
          <Stack direction="row" gap={1} style={{ width: '100%' }} alignItems="center">
            <div className={classes.valueContainer}>
              {item.value}
            </div>
            {displayProgressBar && (
              <Box className={classes.progressContainer}>
                <LinearProgress
                  variant="determinate"
                  value={Number(item.value > 100 ? 100 : item.value)}
                  sx={{
                    backgroundColor: 'rgba(200, 230, 241, 0.8)',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: theme.color[colorBar[index]]
                    }
                  }}
                />
              </Box>
            )}
          </Stack>
        </div>
      ))}
    </>
  )
}

export default memo(InfoTab)