import React from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import Text from "../../components/Text/Text";
import { colors, fontSize } from "../../util/theme";
import AddIcon from "@mui/icons-material/Add";

const CategoryTab = () => {
  const styles = {
    container: {
      width: "100%",
      borderRadius: "2px",
      textAlign: "left",
      border: `0.5px solid ${colors.lightGray}`,
      padding: "15px 20px",
    },
    category: {
      padding: "5px 0px",
    },
    categoryContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    addIconStyle: {
      fontSize: fontSize.medium,
      color: colors.accentColor,
    },
    subCategoryContainer: {
      fontSize: fontSize.normal,
      color: colors.gray,
    },
  };
  const categories = [
    {
      name: "Sportswear",
      active: false,
    },
    {
      name: "MENS",
      active: false,
    },
    {
      name: "WOMENS",
      active: false,
    },
    {
      name: "KIDS",
      active: false,
    },
    {
      name: "FASHION",
      active: false,
    },
    {
      name: "HOUSEHOLDS",
      active: false,
    },
    {
      name: "INTERIORS",
      active: false,
    },
    {
      name: "CLOTHINGr",
      active: false,
    },
    {
      name: "BAGS",
      active: false,
    },
    {
      name: "SHOES",
      active: false,
    },
  ];

  const subCategory = [
    {
      categoryName: "Sportswear",
      name: "Adidas",
      active: false,
    },
    {
      categoryName: "Sportswear",
      name: "Nike",
      active: false,
    },
    {
      categoryName: "Sportswear",
      name: "Puma",
      active: false,
    },
    {
      categoryName: "Sportswear",
      name: "BezMarkice",
      active: false,
    },

    {
      categoryName: "Mens",
      name: "Adidas",
      active: false,
    },
    {
      categoryName: "Mens",
      name: "Nikee",
      active: false,
    },
  ];

  return (
    <SimplifiedDiv style={styles.container}>
      {categories.map((cat) => {
        const filteredSubcategories = subCategory.filter(
          (sub) => sub.categoryName === cat.name
        );

        return (
          <>
            <SimplifiedDiv style={styles.categoryContainer}>
              <Text style={styles.category}>{cat.name}</Text>
              <AddIcon style={styles.addIconStyle} />
            </SimplifiedDiv>
            {filteredSubcategories.length > 0 && (
              <SimplifiedDiv>
                {filteredSubcategories.map((sub) => (
                  <Text>{sub.name}</Text>
                ))}
              </SimplifiedDiv>
            )}
          </>
        );
      })}
    </SimplifiedDiv>
  );
};

export default CategoryTab;
