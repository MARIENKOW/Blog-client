"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import "./textEditor.scss";

import StarterKit from "@tiptap/starter-kit";
import IconButton from "@mui/material/IconButton";
import FontFamily from "@tiptap/extension-font-family";
import TextStyle from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatStrikethroughIcon from "@mui/icons-material/FormatStrikethrough";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatClearIcon from "@mui/icons-material/FormatClear";
import Underline from "@tiptap/extension-underline";
import { Box, FormHelperText, useTheme } from "@mui/material";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import Image from "@tiptap/extension-image";
import { red } from "@mui/material/colors";
import { useCallback } from "react";
import CustomImage from "./CustomImg";

const Tiptap = ({ error, value, onChange, setBody }) => {
   const theme = useTheme();

   const editor = useEditor({
      extensions: [
         StarterKit,
         FontFamily,
         TextStyle,
         Underline,
         // Image.configure({
         //    HTMLAttributes: {
         //       class: "my-custom-paragraph",
         //    },
         // }),
         CustomImage,
         TextAlign.configure({
            types: ["heading", "paragraph"],
         }),
      ],
      content: value,
      immediatelyRender: false,
      onUpdate({ editor }) {
         onChange(editor.getText());
         setBody(editor.getHTML());
      },
   });

   const addImage = useCallback(() => {
      const url = window.prompt("URL");

      if (url) {
         editor.chain().focus().setImage({ src: url }).run();
      }
   }, [editor]);

   return (
      <>
         <Box
            sx={{
               border: "1px solid ",
               borderColor: !!error ? red[900] : theme.palette.secondary.main,
               borderRadius: 4,
            }}
         >
            <Box>
               <IconButton
                  // color={editor?.isActive("bold") ? "primary" : "secondary"}
                  onClick={addImage}
               >
                  Img
               </IconButton>
               <IconButton
                  color={editor?.isActive("bold") ? "primary" : "secondary"}
                  onClick={() => editor.chain().focus().toggleBold().run()}
               >
                  <FormatBoldIcon />
               </IconButton>
               <IconButton
                  color={editor?.isActive("italic") ? "primary" : "secondary"}
                  onClick={() => editor.chain().focus().toggleItalic().run()}
               >
                  <FormatItalicIcon />
               </IconButton>
               <IconButton
                  color={editor?.isActive("strike") ? "primary" : "secondary"}
                  onClick={() => editor.chain().focus().toggleStrike().run()}
               >
                  <FormatStrikethroughIcon />
               </IconButton>
               <IconButton
                  color={
                     editor?.isActive("underline") ? "primary" : "secondary"
                  }
                  onClick={() => editor.chain().focus().toggleUnderline().run()}
               >
                  <FormatUnderlinedIcon />
               </IconButton>
               <IconButton
                  color={"secondary"}
                  onClick={() => editor.chain().focus().unsetAllMarks().run()}
               >
                  <FormatClearIcon />
               </IconButton>

               <IconButton
                  color={
                     editor?.isActive("heading", { level: 6 })
                        ? "primary"
                        : "secondary"
                  }
                  onClick={() =>
                     editor.chain().focus().toggleHeading({ level: 6 }).run()
                  }
               >
                  h6
               </IconButton>
               <IconButton
                  color={
                     editor?.isActive("heading", { level: 5 })
                        ? "primary"
                        : "secondary"
                  }
                  onClick={() =>
                     editor.chain().focus().toggleHeading({ level: 5 }).run()
                  }
               >
                  h5
               </IconButton>
               <IconButton
                  color={
                     editor?.isActive("heading", { level: 4 })
                        ? "primary"
                        : "secondary"
                  }
                  onClick={() =>
                     editor.chain().focus().toggleHeading({ level: 4 }).run()
                  }
               >
                  h4
               </IconButton>
               <IconButton
                  color={
                     editor?.isActive("heading", { level: 3 })
                        ? "primary"
                        : "secondary"
                  }
                  onClick={() =>
                     editor.chain().focus().toggleHeading({ level: 3 }).run()
                  }
               >
                  h3
               </IconButton>
               <IconButton
                  color={
                     editor?.isActive("heading", { level: 2 })
                        ? "primary"
                        : "secondary"
                  }
                  onClick={() =>
                     editor.chain().focus().toggleHeading({ level: 2 }).run()
                  }
               >
                  h2
               </IconButton>
               <IconButton
                  color={
                     editor?.isActive("heading", { level: 1 })
                        ? "primary"
                        : "secondary"
                  }
                  onClick={() =>
                     editor.chain().focus().toggleHeading({ level: 1 }).run()
                  }
               >
                  h1
               </IconButton>
               <IconButton
                  color={
                     editor?.isActive("bulletList") ? "primary" : "secondary"
                  }
                  onClick={() =>
                     editor.chain().focus().toggleBulletList().run()
                  }
               >
                  <FormatListBulletedIcon />
               </IconButton>
               <IconButton
                  color={
                     editor?.isActive("orderedList") ? "primary" : "secondary"
                  }
                  onClick={() =>
                     editor.chain().focus().toggleOrderedList().run()
                  }
               >
                  <FormatListNumberedIcon />
               </IconButton>
               <IconButton
                  sx={{ fontFamily: "Inter" }}
                  color={
                     editor?.isActive("textStyle", { fontFamily: "Inter" })
                        ? "primary"
                        : "secondary"
                  }
                  onClick={() =>
                     editor.chain().focus().setFontFamily("Inter").run()
                  }
               >
                  Inter
               </IconButton>
               <IconButton
                  sx={{ fontFamily: "Comic Sans MS, Comic Sans" }}
                  color={
                     editor?.isActive("textStyle", {
                        fontFamily: "Comic Sans MS, Comic Sans",
                     })
                        ? "primary"
                        : "secondary"
                  }
                  onClick={() =>
                     editor
                        .chain()
                        .focus()
                        .setFontFamily("Comic Sans MS, Comic Sans")
                        .run()
                  }
               >
                  Comic Sans
               </IconButton>
               <IconButton
                  sx={{ fontFamily: "Monospace" }}
                  color={
                     editor?.isActive("textStyle", { fontFamily: "monospace" })
                        ? "primary"
                        : "secondary"
                  }
                  onClick={() =>
                     editor.chain().focus().setFontFamily("monospace").run()
                  }
               >
                  Monospace
               </IconButton>
               <IconButton
                  sx={{ fontFamily: "cursive" }}
                  color={
                     editor?.isActive("textStyle", { fontFamily: "cursive" })
                        ? "primary"
                        : "secondary"
                  }
                  onClick={() =>
                     editor.chain().focus().setFontFamily("cursive").run()
                  }
               >
                  Cursive
               </IconButton>
               <IconButton
                  onClick={() => editor.chain().focus().unsetFontFamily().run()}
               >
                  Default
               </IconButton>
               <IconButton
                  color={
                     editor?.isActive({ textAlign: "left" })
                        ? "primary"
                        : "secondary"
                  }
                  onClick={() =>
                     editor.chain().focus().setTextAlign("left").run()
                  }
               >
                  <FormatAlignLeftIcon />
               </IconButton>
               <IconButton
                  color={
                     editor?.isActive({ textAlign: "center" })
                        ? "primary"
                        : "secondary"
                  }
                  onClick={() =>
                     editor.chain().focus().setTextAlign("center").run()
                  }
               >
                  <FormatAlignCenterIcon />
               </IconButton>
               <IconButton
                  color={
                     editor?.isActive({ textAlign: "right" })
                        ? "primary"
                        : "secondary"
                  }
                  onClick={() =>
                     editor.chain().focus().setTextAlign("right").run()
                  }
               >
                  <FormatAlignRightIcon />
               </IconButton>
            </Box>
            <EditorContent
               style={{
                  padding: "0 20px 20px 20px",
                  minWidth: "100%",
                  width: "100%",
               }}
               onChange={(editor) => console.log(editor)}
               editor={editor}
            />
         </Box>
         {error && (
            <FormHelperText sx={{ ml: "14px", mr: "14px" }} error={!!error}>
               {error && (error?.message || "incorrect data")}
            </FormHelperText>
         )}
      </>
   );
};

export default Tiptap;
