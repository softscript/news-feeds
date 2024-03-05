import React from "react";
import { StyledAsideCard } from "../customCard/styles";
import AsideListItem from "../listItem";
import { Divider } from "@mui/material";
import { AsideWrapper } from "./styles";
import { FooterSectionHeading, SectionHeading } from "../pageSection/styles";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import Loader from "../loader/loader";
export default function Aside({
  items: { category, news },
  loading,
  limit = 10
}) {
  if (!news && !loading) {
    return <p>Missing...</p>;
  }
  let itemList = news || [];
  if (itemList.length > 10) {
    itemList = itemList.slice(0, limit);
  }
  return (
    <AsideWrapper>
      <StyledAsideCard>
        <SectionHeading variant="h4">
          {category ? category.label : ""}
        </SectionHeading>
        <Divider />
        <AsideListItem items={itemList || []} />
        <Divider />
        {itemList && itemList.length > 0 && (
          <FooterSectionHeading variant="h6">
            <ArrowCircleRightOutlinedIcon sx={{ margin: "auto 0", mr: 2 }} />
            More {category ? category.label : "Items"}
          </FooterSectionHeading>
        )}
        {loading && <Loader />}
      </StyledAsideCard>
    </AsideWrapper>
  );
}
