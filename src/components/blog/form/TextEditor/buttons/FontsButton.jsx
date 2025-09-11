import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function FontsButton({ editor }) {
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        if (event.target.value === "Default") {
            editor.chain().focus().unsetFontFamily().run();
        } else {
            editor.chain().focus().setFontFamily(event.target.value).run();
        }
        setAge(event.target.value);
    };

    React.useEffect(() => {
        setAge(editor?.getAttributes("textStyle")?.fontFamily || '');
    }, [editor?.getAttributes("textStyle")?.fontFamily]);

    return (
        <Box display={"inline-block"} sx={{ minWidth: 75 }}>
            <FormControl
                size="small"
                sx={{ display: "inline-block", minWidth: 75 }}
                fullWidth
            >
                <InputLabel id="demo-simple-select-label">Font</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    sx={{ width: "100%" }}
                    label="Font"
                    // displayEmpty
                    onChange={handleChange}
                >
                    <MenuItem
                        sx={{ fontFamily: "Inter" }}
                        // color={
                        //     editor?.isActive("textStyle", {
                        //         fontFamily: "Inter",
                        //     })
                        //         ? "primary"
                        //         : "secondary"
                        // }
                        // onClick={() =>
                        //     editor.chain().focus().setFontFamily("Inter").run()
                        // }
                        value={"Inter"}
                    >
                        Inter
                    </MenuItem>
                    <MenuItem
                        sx={{ fontFamily: "Comic Sans MS, Comic Sans" }}
                        // color={
                        //     editor?.isActive("textStyle", {
                        //         fontFamily: "Comic Sans MS, Comic Sans",
                        //     })
                        //         ? "primary"
                        //         : "secondary"
                        // }
                        // onClick={() =>
                        //     editor
                        //         .chain()
                        //         .focus()
                        //         .setFontFamily("Comic Sans MS, Comic Sans")
                        //         .run()
                        // }
                        value={"Comic Sans"}
                    >
                        Comic Sans
                    </MenuItem>
                    <MenuItem
                        sx={{ fontFamily: "Monospace" }}
                        // color={
                        //     editor?.isActive("textStyle", {
                        //         fontFamily: "monospace",
                        //     })
                        //         ? "primary"
                        //         : "secondary"
                        // }
                        // onClick={() =>
                        //     editor
                        //         .chain()
                        //         .focus()
                        //         .setFontFamily("monospace")
                        //         .run()
                        // }
                        value={"Monospace"}
                    >
                        Monospace
                    </MenuItem>
                    <MenuItem
                        value={"Cursive"}
                        // sx={{ fontFamily: "cursive" }}
                        // color={
                        //     editor?.isActive("textStyle", {
                        //         fontFamily: "cursive",
                        //     })
                        //         ? "primary"
                        //         : "secondary"
                        // }
                        // onClick={() =>
                        //     editor
                        //         .chain()
                        //         .focus()
                        //         .setFontFamily("cursive")
                        //         .run()
                        // }
                    >
                        Cursive
                    </MenuItem>
                    <MenuItem
                        value={"Default"}
                        // onClick={() =>
                        //     editor.chain().focus().unsetFontFamily().run()
                        // }
                    >
                        Default
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
