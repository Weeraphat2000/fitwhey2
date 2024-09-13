import { useState } from "react";

import {
  Box,
  Button,
  Dialog,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import image from "../../src/assets/images/place-holder0.png";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, FormProvider, useForm } from "react-hook-form";

import ButtonHome from "../components/ButtonHome";

interface Size {
  size: string;
  disabled: boolean;
  price: number;
}

interface Flavor {
  flavor: string;
  disabled: boolean;
}

interface DefalutValueType {
  size: Size;
  flavor: string;
  amount: number;
}

const listSize: Size[] = [
  {
    size: "Sample",
    disabled: false,
    price: 1_250,
  },
  {
    size: "1lb",
    disabled: false,
    price: 2_250,
  },
  {
    size: "3lb",
    disabled: true,
    price: 3_250,
  },
  {
    size: "5lb",
    disabled: false,
    price: 4_250,
  },
  {
    size: "10lb",
    disabled: false,
    price: 5_250,
  },
];

const listFlavor: Flavor[] = [
  {
    disabled: false,
    flavor: "Chocolate",
  },
  {
    flavor: "Matcha Green Tea",
    disabled: false,
  },
  {
    disabled: false,
    flavor: "Vanilla",
  },
  {
    disabled: true,
    flavor: "Cafe Mocha",
  },

  {
    disabled: false,
    flavor: "Orange Yuzu",
  },
];

const covertNumberToCurrency = (number: number) => {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};

const sehema = yup.object().shape({
  size: yup.object().shape({
    size: yup.string().required("Please select size"),
    disabled: yup.boolean().required(),
    price: yup.number().required(),
  }),
  flavor: yup.string().required("Please select flavor"),
  amount: yup.number().required("Please select amount"),
});

export function ModalFitWhey() {
  const [open, setOpen] = useState(false);
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const price = 1_250;

  const handleCloseDialog = () => {
    setOpen(false);
    methods.reset();
  };
  const defaultValues: DefalutValueType = {
    size: {
      size: "",
      disabled: false,
      price: 0,
    },
    flavor: "",
    amount: 1,
  };

  const methods = useForm({
    resolver: yupResolver(sehema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
  } = methods;

  const submit = handleSubmit((data) => {
    console.log(data);
    toast.success("Submit success");
    handleCloseDialog();
    setIsConfirm(false);
  });

  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
      <ButtonHome />

      <Dialog
        open={isConfirm}
        onClose={() => {
          setIsConfirm(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Typography variant="h6" sx={{ padding: 4 }}>
          Are you sure you want to buy?
        </Typography>
        <Typography variant="body2" sx={{ paddingInline: 4 }}>
          Size: {watch("size")?.size}
        </Typography>
        <Typography variant="body2" sx={{ paddingInline: 4 }}>
          Flavor: {watch("flavor")}
        </Typography>
        <Typography variant="body2" sx={{ paddingInline: 4 }}>
          Quantity: {watch("amount")}
        </Typography>
        <Typography variant="body2" sx={{ paddingInline: 4 }}>
          Price: {covertNumberToCurrency(watch("size")?.price)}฿
        </Typography>

        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" sx={{ padding: 4 }}>
            total price:{" "}
            {covertNumberToCurrency(watch("size")?.price * watch("amount"))}฿
          </Typography>
          <Button
            sx={{
              margin: 2,
            }}
            onClick={() => {
              submit();
            }}
          >
            submit
          </Button>
        </Box>
      </Dialog>

      <Dialog
        open={open}
        onClose={() => handleCloseDialog()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <FormProvider {...methods}>
          <form onSubmit={submit}>
            <Box sx={{ padding: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: 2,
                    gap: 2,
                  }}
                >
                  <img src={image} alt="product" style={{ width: "150px" }} />
                  <Box>
                    <Typography variant="h6">
                      Baam My Whey Protien one two sentences
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Short description two sentence Lorem ipsum Short
                      description two sentence
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ marginY: 1, marginRight: 1 }}
                      >
                        start
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ marginY: 1, color: "red", marginRight: 1 }}
                      >
                        ${price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}฿
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ textDecoration: "line-through", marginY: 1 }}
                      >
                        ${"1,699".replace(/\d(?=(\d{3})+\.)/g, "$&,")}฿
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <IconButton
                  onClick={() => handleCloseDialog()}
                  sx={{ padding: 1, marginLeft: 2 }}
                >
                  <Close />
                </IconButton>
              </Box>

              <Divider sx={{ marginY: 2 }} />

              <Typography variant="body2" color="primary" gutterBottom>
                Please select your options
              </Typography>

              <Box sx={{ marginBottom: 2 }}>
                <Typography variant="subtitle1">Size (Select 1)</Typography>

                <Controller
                  name="size"
                  control={methods.control}
                  render={({ field }) => (
                    <Box>
                      {listSize.map((item, index) => (
                        <Button
                          key={index}
                          variant="contained"
                          disabled={item.disabled}
                          onClick={() => {
                            field.onChange(item);

                            methods.clearErrors("size");
                          }}
                          sx={{
                            margin: 1,
                            backgroundColor:
                              field.value.size === item.size
                                ? "#0000ff"
                                : "#f0f0f0",
                            color:
                              field?.value.size === item.size
                                ? "white"
                                : "black",
                          }}
                        >
                          {item.size}
                        </Button>
                      ))}
                      {errors?.size && (
                        <Typography variant="body2" color="error">
                          {errors.size.size?.message}
                        </Typography>
                      )}
                    </Box>
                  )}
                />
              </Box>

              {/* Flavor Section */}
              <Box sx={{ marginBottom: 2 }}>
                <Typography variant="subtitle1">Flavor (Select 1)</Typography>

                <Controller
                  name="flavor"
                  control={methods.control}
                  render={({ field }) => (
                    <Box>
                      {listFlavor.map((item, index) => (
                        <Button
                          key={index}
                          variant="contained"
                          onClick={() => {
                            field.onChange(item.flavor);
                            methods.clearErrors("flavor");
                          }}
                          disabled={item.disabled}
                          sx={{
                            margin: 1,
                            backgroundColor:
                              field.value === item.flavor
                                ? "#0000ff"
                                : "#f0f0f0",
                            color:
                              field?.value === item.flavor ? "white" : "black",
                          }}
                        >
                          {item.flavor}
                        </Button>
                      ))}

                      {errors?.flavor && (
                        <Typography variant="body2" color="error">
                          {errors.flavor?.message}
                        </Typography>
                      )}
                    </Box>
                  )}
                />
              </Box>

              {/* Quantity Section */}
              <Box
                sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
              >
                <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
                  Quantity
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button onClick={() => {}}>-</Button>
                  <Typography sx={{ marginX: 2 }}>{watch("amount")}</Typography>
                  <Button
                    onClick={() => {
                      methods.setValue("amount", watch("amount") + 1);
                    }}
                  >
                    +
                  </Button>
                </Box>
              </Box>

              <Divider sx={{ marginY: 2 }} />

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Button
                    onClick={async () => {
                      if (await trigger()) {
                        toast.success("Added to cart");
                        setOpen(false);
                        methods.reset();
                      }
                    }}
                    sx={{
                      color: "white",
                      backgroundColor: "#0000ff",
                      width: "100%",
                      "&:hover": {
                        backgroundColor: "#0000aa",
                      },
                    }}
                  >
                    Add to Cart
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    onClick={async () => {
                      if (await trigger()) {
                        setIsConfirm(true);
                      }
                    }}
                    sx={{
                      color: "white",
                      backgroundColor: "#ff7700",
                      width: "100%",
                      "&:hover": {
                        backgroundColor: "#ff5500",
                      },
                    }}
                  >
                    Buy Now
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        </FormProvider>
      </Dialog>

      <Button
        fullWidth
        onClick={() => setOpen(true)}
        sx={{
          color: "white",
          backgroundColor: "#0000ff",

          "&:hover": {
            backgroundColor: "#0000aa",
          },
        }}
      >
        Open Dialog
      </Button>
    </Box>
  );
}
