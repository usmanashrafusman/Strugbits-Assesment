import { Grid, Typography } from "@mui/material";
import { FaSort } from "react-icons/fa";
import useMedia from "@/hooks/useMedia";

const Table = ({ columns, rows }) => {
  const { isMobile, isTablet } = useMedia();

  return (
    <>
      <Grid container sx={stylesheet.columnWrapper}>
        {columns.map((c, i) => {
          const breakpoints = c?.breakpoints || {};
          return (
            <Grid item {...breakpoints} key={c.name + i} sx={stylesheet.row}>
              {c.title ? (
                <>
                  <Typography
                    sx={{
                      color: "#015249",
                      fontSize: isMobile ? 10 : 14,
                      cursor: "pointer",
                    }}
                    fontWeight={550}
                  >
                    {c.title}
                  </Typography>
                  <FaSort color="#015249" sx={{ fontSize: 10 }} />
                </>
              ) : null}
            </Grid>
          );
        })}
      </Grid>
      <Grid container sx={stylesheet.column}>
        {rows.map((r) => {
          return columns.map((c, i) => {
            const breakpoints = c?.breakpoints || {};
            let Component = <Typography>{r[c.name]}</Typography>;
            if (c?.RenderCell) {
              Component = c?.RenderCell(r);
            }
            return (
              <Grid item {...breakpoints} key={r.id + i} sx={stylesheet.row}>
                {Component}
              </Grid>
            );
          });
        })}
      </Grid>
    </>
  );
};

export default Table;

const stylesheet = {
  header: {
    background: "#57BC90",
  },
  row: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    overflow: "hidden",
  },
  column: {
    boxShadow: "0px 3px 5px #8D8D8D1A",
    borderRadius: "10px",
    background: "#fff",
    marginTop: 2,
    padding: 2,
  },
  columnWrapper: {
    marginTop: 2,
    padding: 1,
    borderRadius: "10px",
    background: "#57BC90",
  },
  actionBtn: {
    paddingX: 3,
    paddingY: 1,
  },
};
