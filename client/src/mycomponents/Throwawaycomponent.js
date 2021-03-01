<Grid item sm={6}>
                                        <Paper elevation={3} className={classes.tabContent} style={{marginTop:"0px", maringLeft:"0px"}}>
                                            <Grid container >
                                                <Grid Item xs={12} style={{marginBottom:"10px", marginLeft:"10px"}}>
                                                State Variables:

                                                </Grid>

                                                <Grid item xs={3} style={{marginTop:"10px", marginLeft:"5px"}}>
                                                   Flash Type
                                                </Grid>
                                                <Grid item xs={4} style={{marginTop:"10px"}}>
                                                   
                                                    <TextField
                                                        id="outlined-number"
                                                        label="Number"
                                                        type="number"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        variant="outlined"
                                                        size="small"
                                                        onChange={(evt) => console.log("The input is working")/*setNodeName(evt.target.value)*/}
                                                    />
                                                </Grid>
                                                
                                                <Grid item xs={4} style={{marginTop:"10px"}}>
                                                    <TextField
                                                        id="outlined-select-currency-native"
                                                        select
                                                        label="Units"
                                                        value={temperature}
                                                        onChange={handleChangePressure}
                                                        SelectProps={{
                                                            native: true,
                                                        }}
                                                       
                                                        variant="outlined"
                                                        size="small"
                                                    >
                                                        {currencies.map((option) => (
                                                            <option key={option.value} value={option.value}>
                                                            {option.label}
                                                            </option>
                                                        ))}
                                                    </TextField>
                                                </Grid>
                                        
                                                <Grid item xs={3} style={{marginTop:"10px", marginLeft:"5px"}}>

                                                    Temperature
                                                </Grid>
                                                <Grid item xs={4} style={{marginTop:"10px"}} >
                                                   
                                                    <TextField
                                                        id="outlined-number"
                                                        label="Number"
                                                        type="number"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        variant="outlined"
                                                        size="small"
                                                        onChange={(evt) => console.log("The input is working")/*setNodeName(evt.target.value)*/}
                                                    />
                                                </Grid>
                                                
                                                <Grid item xs={4} style={{marginTop:"10px"}} >
                                                    <TextField
                                                        id="outlined-select-currency-native"
                                                        select
                                                        label="Units"
                                                        value={temperature}
                                                        onChange={handleChangeTemperature}
                                                        SelectProps={{
                                                            native: true,
                                                        }}
                                                        
                                                        variant="outlined"
                                                        size="small"
                                                    >
                                                        {currencies.map((option) => (
                                                            <option key={option.value} value={option.value}>
                                                            {option.label}
                                                            </option>
                                                        ))}
                                                    </TextField>
                                                </Grid>
                                                <Grid item xs={3} style={{marginTop:"10px", marginLeft:"5px"}}>
                                                    Pressure
                                                </Grid>
                                                <Grid item xs={4} style={{marginTop:"10px"}}>
                                                   
                                                    <TextField
                                                        id="outlined-number"
                                                        label="Number"
                                                        type="number"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        variant="outlined"
                                                        size="small"
                                                        onChange={(evt) => console.log("The input is working")/*setNodeName(evt.target.value)*/}
                                                    />
                                                </Grid>
                                                
                                                <Grid item xs={4} style={{marginTop:"10px"}}>
                                                    <TextField
                                                        id="outlined-select-currency-native"
                                                        select
                                                        label="Units"
                                                        value={temperature}
                                                        onChange={handleChangePressure}
                                                        SelectProps={{
                                                            native: true,
                                                        }}
                                                       
                                                        variant="outlined"
                                                        size="small"
                                                    >
                                                        {currencies.map((option) => (
                                                            <option key={option.value} value={option.value}>
                                                            {option.label}
                                                            </option>
                                                        ))}
                                                    </TextField>
                                                </Grid>
                                                <Grid item xs={3} style={{marginTop:"10px", marginLeft:"5px"}}>
                                                    Vapor Fraction
                                                </Grid>
                                                <Grid item xs={4} style={{marginTop:"10px"}}>
                                                   
                                                    <TextField
                                                        id="outlined-number"
                                                        label="Number"
                                                        type="number"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        variant="outlined"
                                                        size="small"
                                                        onChange={(evt) => console.log("The input is working")/*setNodeName(evt.target.value)*/}
                                                    />
                                                </Grid>
                                                
                                                <Grid item xs={4} style={{marginTop:"10px"}}>
                                                    <TextField
                                                        id="outlined-select-currency-native"
                                                        select
                                                        label="Units"
                                                        value={temperature}
                                                        onChange={handleChangePressure}
                                                        SelectProps={{
                                                            native: true,
                                                        }}
                                                       
                                                        variant="outlined"
                                                        size="small"
                                                    >
                                                        {currencies.map((option) => (
                                                            <option key={option.value} value={option.value}>
                                                            {option.label}
                                                            </option>
                                                        ))}
                                                    </TextField>
                                                </Grid>
                                                <Grid item xs={3} style={{marginTop:"10px", marginLeft:"5px"}}>
                                                   Total Flow Basis
                                                </Grid>
                                                <Grid item xs={4} style={{marginTop:"10px"}}>
                                                   
                                                    <TextField
                                                        id="outlined-number"
                                                        label="Number"
                                                        type="number"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        variant="outlined"
                                                        size="small"
                                                        onChange={(evt) => console.log("The input is working")/*setNodeName(evt.target.value)*/}
                                                    />
                                                </Grid>
                                                
                                                <Grid item xs={4} style={{marginTop:"10px"}}>
                                                    <TextField
                                                        id="outlined-select-currency-native"
                                                        select
                                                        label="Units"
                                                        value={temperature}
                                                        onChange={handleChangePressure}
                                                        SelectProps={{
                                                            native: true,
                                                        }}
                                                       
                                                        variant="outlined"
                                                        size="small"
                                                    >
                                                        {currencies.map((option) => (
                                                            <option key={option.value} value={option.value}>
                                                            {option.label}
                                                            </option>
                                                        ))}
                                                    </TextField>
                                                </Grid>
                                                <Grid item xs={3} style={{marginTop:"10px", marginLeft:"5px"}}>
                                                    Total Flow Rate
                                                </Grid>
                                                <Grid item xs={4} style={{marginTop:"10px"}}>
                                                   
                                                    <TextField
                                                        id="outlined-number"
                                                        label="Number"
                                                        type="number"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        variant="outlined"
                                                        size="small"
                                                        onChange={(evt) => console.log("The input is working")/*setNodeName(evt.target.value)*/}
                                                    />
                                                </Grid>
                                                
                                                <Grid item xs={4} style={{marginTop:"10px"}}>
                                                    <TextField
                                                        id="outlined-select-currency-native"
                                                        select
                                                        label="Units"
                                                        value={temperature}
                                                        onChange={handleChangePressure}
                                                        SelectProps={{
                                                            native: true,
                                                        }}
                                                       
                                                        variant="outlined"
                                                        size="small"
                                                    >
                                                        {currencies.map((option) => (
                                                            <option key={option.value} value={option.value}>
                                                            {option.label}
                                                            </option>
                                                        ))}
                                                    </TextField>
                                                </Grid>
                                                </Grid>
                                                </Paper>
                                            </Grid>