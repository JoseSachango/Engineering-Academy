{/*Chart tabs */}
{/*<div className={classes.tabs}>
<AppBar position="static" color="default">
  <Tabs
    value={valueTabs}
    onChange={handleChangeTabs}
    variant="scrollable"
    scrollButtons="on"
    indicatorColor="primary"
    textColor="primary"
    aria-label="scrollable force tabs example"
  >
    <Tab label="Chart One" icon={<PhoneIcon />} {...a11yProps(0)} />
    <Tab label="Chart Two" icon={<FavoriteIcon />} {...a11yProps(1)} />
    <Tab label="Chart Three" icon={<PersonPinIcon />} {...a11yProps(2)} />
    <Tab label="Chart Four" icon={<HelpIcon />} {...a11yProps(3)} />
    <Tab label="Chart Five" icon={<ShoppingBasket />} {...a11yProps(4)} />
    <Tab label="Chart Six" icon={<ThumbDown />} {...a11yProps(5)} />
    <Tab label="Chart Seven" icon={<ThumbUp />} {...a11yProps(6)} />
  </Tabs>
</AppBar>
<TabPanel value={valueTabs} index={0}>
    <Paper elevation={3} className={classes.chart3}>
      <Chart
        data={chartData}
      >
        <ValueScale name="sale" />
        <ValueScale name="total" />

        <ArgumentAxis />
        <ValueAxis scaleName="sale" showGrid={false} showLine showTicks />
        <ValueAxis scaleName="total" position="right" showGrid={false} showLine showTicks />

        <BarSeries
          name="Units Sold"
          valueField="sale"
          argumentField="month"
          scaleName="sale"
        />

        <LineSeries
          name="Total Transactions"
          valueField="total"
          argumentField="month"
          scaleName="total"
        />
                <Title
                  text="Noisy and Original signals"
                  textComponent={TitleText}
                />

        <Legend />
      </Chart>
    </Paper>
</TabPanel>
<TabPanel value={valueTabs} index={1}>
  <div style={{ height: 400, width: '100%' }}>
    <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
  </div>
</TabPanel>
<TabPanel value={valueTabs} index={2}>
  Item Three
</TabPanel>
<TabPanel value={valueTabs} index={3}>
  Item Four
</TabPanel>
<TabPanel value={valueTabs} index={4}>
  Item Five
</TabPanel>
<TabPanel value={valueTabs} index={5}>
  Item Six
</TabPanel>
<TabPanel value={valueTabs} index={6}>
  Item Seven
</TabPanel>
</div>*/}
{/*Char tabs end */}